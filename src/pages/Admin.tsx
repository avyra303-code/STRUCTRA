import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db, auth, signInWithGoogle, handleFirestoreError, OperationType } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Section from '../components/Section';
import { Download, Lock, RefreshCw, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ADMIN_EMAIL = 'avyra303@gmail.com';

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u && u.email === ADMIN_EMAIL && u.emailVerified) {
        fetchSubscribers();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchSubscribers = async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(collection(db, 'subscribers'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()?.toLocaleString() || 'N/A'
      }));
      setSubscribers(docs);
    } catch (err) {
       setError("Could not fetch subscribers. Check permissions.");
       handleFirestoreError(err, OperationType.LIST, 'subscribers');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (subscribers.length === 0) return;
    
    const headers = ['Email', 'Created At', 'Source'];
    const rows = subscribers.map(s => [s.email, s.createdAt, s.source || 'N/A']);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `structra_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!user || user.email !== ADMIN_EMAIL || !user.emailVerified) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-bg p-6">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-aesthetic border border-accent/10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-serif mb-4">Admin Access</h1>
          <p className="text-charcoal/50 text-sm mb-10 leading-relaxed">
            This area is restricted to authorized personnel. Please sign in with the admin account to access the subscriber list.
          </p>
          <button 
            onClick={signInWithGoogle}
            className="w-full py-4 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
          >
            SIGN IN AS ADMIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen pb-20">
      <Section className="!pb-0 pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-2">Backoffice</span>
            <h1 className="text-4xl md:text-6xl text-primary font-serif font-bold">Subscribers</h1>
          </div>
          <div className="flex gap-3">
             <button 
              onClick={fetchSubscribers} 
              className="p-4 bg-white border border-accent/20 rounded-full text-primary hover:bg-bg transition-all"
              title="Refresh list"
            >
              <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
            </button>
            <button 
              onClick={exportToCSV}
              disabled={subscribers.length === 0}
              className="px-8 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              <Download size={20} /> EXPORT CSV
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 p-6 rounded-3xl flex items-center gap-4 text-red-600 mb-8">
            <AlertCircle size={24} />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <div className="bg-white rounded-3xl border border-accent/10 shadow-aesthetic overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-bg/50 border-b border-accent/10 text-[10px] font-bold uppercase tracking-widest text-charcoal/40">
                  <th className="px-8 py-6">Email Address</th>
                  <th className="px-8 py-6">Date Subscribed</th>
                  <th className="px-8 py-6">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent/5">
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}>
                      <td colSpan={3} className="px-8 py-6">
                        <div className="h-4 bg-bg animate-pulse rounded w-1/2" />
                      </td>
                    </tr>
                  ))
                ) : subscribers.length > 0 ? (
                  subscribers.map((sub) => (
                    <motion.tr 
                      key={sub.id} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-bg/10 transition-colors"
                    >
                      <td className="px-8 py-6 text-sm font-medium text-primary">{sub.email}</td>
                      <td className="px-8 py-6 text-sm text-charcoal/50">{sub.createdAt}</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-secondary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-secondary/20">
                          {sub.source || 'N/A'}
                        </span>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-8 py-20 text-center text-charcoal/40 font-medium">
                      No subscribers found yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </div>
  );
}
