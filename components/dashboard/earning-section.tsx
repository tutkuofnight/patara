import { Icon } from "@/components/ui/icon";
import ReferralCircle from "@/components/referral-circle";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import { motion } from "framer-motion"

export default function EarningSection(){
  return (
    <section className="xl:h-[400px] flex flex-col xl:flex-row gap-5">
      <div className="relative w-full h-full rounded-[26px] bg-primary md:flex-1 flex justify-between p-6 md:p-10">
        <div className="w-full grid grid-cols-[100%] grid-rows-[100px_450px_230px] md:grid-rows-[150px_340px] md:grid-cols-[430px_1fr]">
          <div className="flex flex-col gap-1 row-start-1">
            <p className="text-[32px] font-normal">Refer and Earn</p>
            <p className="text-secondary-foreground text-[16px] max-w-[350px]">Invite your friends to Patara and earn a share of their on-chain rewards forever!</p>
          </div>
          <div className="w-full flex flex-col gap-5 row-start-3 md:row-start-2 md:justify-end xl:justify-start">
            <div className="bg-secondary rounded-3 px-4 py-6 flex flex-col gap-2">
              <h2 className="text-secondary-foreground text-sm">Your Referral Link</h2>
              <p className="font-normal text-[16px] text-white overflow-x-auto">0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center w-full gap-5">
              <Button size={'xl'} className="flex-1 w-full">Copy Link</Button>
              <Button size={'xl'} className="flex-1 w-full" variant={"secondary"}>
                <Icon name="ShareFat" size={24} />
                Share
              </Button>
            </div>
          </div>
          <div className="-scale-90 md:-scale-80 lg:scale-100 lg:rotate-0 lg:mr-4 sm:rotate-180 rotate-180 row-start-2 md:row-start-1 md:col-start-1 relative md:absolute md:top-1/2 md:right-0 md:translate-y-[-50%]">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:relative md:-top-30 md:left-0 md:translate-x-0 md:translate-y-0 lg:top-1/2 lg:mr-8 xl:mr-0">
              <ReferralCircle />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="w-full xl:w-[335px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 xl:flex xl:flex-col gap-5"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Card title="Total Earned Fee" value="$1,000.00" iconName="HandCoins" />
        <Card title="Unclaimed Fee" value="$500.00" iconName="Asterisk" action={{ title: "Claim", action: () => alert("Claimed Succesfully!") }} />
        <Card title="Total Referral Points" value="1289" iconName="Gift" />
        <Card title="Referrals" value="34" iconName="UserPlus" />
      </motion.div>
    </section>
  )
}