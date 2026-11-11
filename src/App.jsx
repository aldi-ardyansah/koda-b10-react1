function App() {
  return (
    <div>
      <form>
        <label forName="">Siapa nama anda?</label>
        <div>
          <input type="text" name="name" />
        </div>
        <label forName="age">Berapa usia anda?</label>
        <div>
          <input type="number" name="age" />
        </div>
        <label forName="gender">Apa jenis kelamin anda?</label>
        <div>
          <label forName="gender">Laki-laki</label>
          <input type="radio" name="gender" />
          <label forName="gender">Perempuan</label>
          <input type="radio" name="gender" />
        </div>
        <label forName="smoker">Apakah anda perokok?</label>
        <div>
          <label forName="smoker">Ya</label>
          <input type="radio" name="smoker" />
          <label forName="gender">Tidak</label>
          <input type="radio" name="smoker" />
        </div>
        <label forName="cigar">Jika anda perokok, rokok apa yang pernah anda coba?</label>
        <div>
          <input type="checkbox" name="cigar" />
          <label forName="cigar">Gudang Garam</label>
          <br/>
          <input type="checkbox" name="cigar" />
          <label forName="cigarr">Lucky Strike</label>
          <br/>
          <input type="checkbox" name="cigar" />
          <label forName="cigar">Marlboro</label>
          <br/>
          <input type="checkbox" name="cigar" />
          <label forName="cigar">Esse</label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default App