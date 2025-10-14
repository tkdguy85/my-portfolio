export const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-4xl pb-10">404 - Nothing to be found here...</div>
      <a href="/" className="cosmic-button text-2xl text-white">Maybe we should go Home?</a>
    </section>
  ) 
}