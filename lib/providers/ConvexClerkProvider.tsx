"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string,
);

const ConvexClerkProvider = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/logo.png",
      },
      variables: {
        colorBackground: "#15171c",
        colorPrimary: "#0078ff",
        colorText: "#ffffff",
        colorInputBackground: "#1b1f29",
        colorInputText: "#ffffff",
        // colorInputBorder: "#40444c",
        // colorInputTextPlaceholder: "#b3b3b3",
        // colorInputTextDisabled: "#b3b3b3",
        // colorInputTextError: "#ff0000",
        // colorInputTextSuccess: "#00ff00",
      },
    }}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;
