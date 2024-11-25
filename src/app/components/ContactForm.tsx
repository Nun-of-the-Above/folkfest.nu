'use client'

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to send message')

      // Handle success (e.g., show success message, clear form)
      e.currentTarget.reset()
      alert('Tack för ditt meddelande! Vi återkommer så snart vi kan.')
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Error sending message:', error)
      alert('Ett fel uppstod. Vänligen försök igen senare.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Namn *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
          placeholder="Ditt namn"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
          placeholder="din.epost@exempel.se"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
          placeholder="070-123 45 67"
        />
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
          Typ av evenemang *
        </label>
        <select
          id="eventType"
          name="eventType"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
        >
          <option value="">Välj typ av evenemang</option>
          <option value="show">Show</option>
          <option value="brollop">Bröllop</option>
          <option value="quiz">Quiz</option>
          <option value="trubadur">Trubadur</option>
          <option value="humor">Humor</option>
          <option value="liveband">Liveband</option>
          <option value="dj">DJ</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Meddelande *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
          placeholder="Berätta mer om ditt evenemang..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Skicka meddelande
      </button>
    </form>
  )
}
