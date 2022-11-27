import { auth, firestore, serverTimestamp } from '../lib/firebase'

import Head from 'next/head'
import Link from 'next/link'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      {/* <Loader show={true} /> */}
      <button onClick={() => toast.success('hello toast')}>
        Toast
      </button>
    </div>
  )
}
