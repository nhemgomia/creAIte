"use client";

import axios from "axios";
import { useState } from "react";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
  isPro: boolean;
}
 
export const SubscriptionButton = ({
  isPro = false
}: SubscriptionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href= response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
    } finally {
      setIsLoading(false);
    }
  }

  return ( 
    <Button variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white"/>}
    </Button>
   );
}