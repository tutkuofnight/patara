"use client"
import Header from "@/components/header";
import Earnings from "@/components/earnings";
import EarningSection from "@/components/dashboard/earning-section";

import { motion } from "framer-motion"
import Head from 'next/head'

export default function Dashboard() {
  return (
    <main className="w-full p-layout md:max-w-[1440px] md:mx-auto flex flex-col gap-5 md:py-layout">
      <Head>
        <title>Patara - Mülakat</title>
      </Head>
      
      <Header isAuthenticated />

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="pt-5">
        <EarningSection />
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="pt-10">
        <Earnings />
      </motion.div>
    </main>
  );
}
