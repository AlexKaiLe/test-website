function App() {
  return (
    <main className="page">
      <header>
        <h1>Sunrise Family Clinic</h1>
        <p className="tagline">A sample third-party site for testing the EchoBooking widget.</p>
      </header>

      <section>
        <h2>About us</h2>
        <p>
          We provide friendly, same-week care for the whole family. Use the
          booking button on this page to schedule an appointment.
        </p>
      </section>

      <section>
        <h2>Hours</h2>
        <ul>
          <li>Mon – Fri: 8am – 6pm</li>
          <li>Sat: 9am – 1pm</li>
          <li>Sun: Closed</li>
        </ul>
      </section>

      <section className="note">
        <h2>Widget test</h2>
        <p>
          The EchoBooking script is loaded in <code>index.html</code>. If it works,
          a "Schedule An Appointment HERE" button should appear on this page.
        </p>
        <p>Current origin: <code>{window.location.origin}</code></p>
      </section>
    </main>
  )
}

export default App
