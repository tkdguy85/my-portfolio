import { ThemeToggle } from "../components/ThemeToggle"
import { SpaceBackground } from "../components/SpaceBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
// import { DayTimeBackground } from "../components/DayTimeBackground"

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggles */}
    <ThemeToggle />

    {/* Starry Background Effect */}
    <SpaceBackground />

    {/* Cloudy Background Effect */}
    {/* <DayTimeBackground /> */}

    {/* Navigation */}
    <NavBar />

    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
    </main>

    {/* Footer */}
  </div>
}