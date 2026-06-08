/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Featured } from "./components/Featured";
import { Lookbook } from "./components/Lookbook";
import { Materials } from "./components/Materials";
import { Vision } from "./components/Vision";
import { Editorial } from "./components/Editorial";
import { Community } from "./components/Community";
import { Features } from "./components/Features";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] antialiased selection:bg-[#E5E5E5] selection:text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Lookbook />
        <Materials />
        <Vision />
        <Community />
        <Features />
        <Editorial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
