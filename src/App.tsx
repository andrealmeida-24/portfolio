import {
  About,
  AnimatedHero,
  Contacts,
  Experiences,
  Navbar,
} from "./components";
import { AppInteractionProvider } from "./contexts";

export const App = () => {
  return (
    <AppInteractionProvider>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        {/* <SideNavigation /> */}
        <Navbar />
        <AnimatedHero />
        <About />
        <Experiences />
        <Contacts />
      </main>
    </AppInteractionProvider>
  );
};
