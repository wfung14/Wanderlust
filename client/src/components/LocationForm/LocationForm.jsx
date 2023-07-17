export default function LocationForm() {
  return (
    <>
      <div className="form-container">
        <form>
          <label>Location</label>
          <input type="text" />
          <label for="start">From:</label>
          <input
            type="date"
            value="2020-07-22"
            min="1980-07-22"
            max="2050-07-22"
          />
          <label for="start">To:</label>
          <input
            type="date"
            value="2020-07-22"
            min="1980-07-22"
            max="2050-07-22"
          />
          <button type="submit">Add My Destination</button>
        </form>
      </div>
    </>
  )
}
