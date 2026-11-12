function App() {
  return (
    <div className="min-h-screen bg-purple-50 p-5">
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-4 lg:w-1/2 w-full">
          <div className="bg-white p-10 border border-gray-200 rounded-lg border-t-8 border-t-violet-700 flex flex-col">
            <span className="text-2xl pb-4">Form Survey Perokok dan Non-perokok</span>
            <hr className="border-gray-400"/>
            <span className="py-4">guest@gmail.com <a href="#">Switch account</a></span>
            <hr className="border-gray-400"/>
            <span className="pt-4 text-red-600">* Indicates required question</span>
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label forName="">Siapa nama anda?<sup className="text-red-600">*</sup></label>
            <input type="text" name="name" required />
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label forName="age">Berapa usia anda?<sup className="text-red-600">*</sup></label>
            <input type="number" name="age" required />
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label forName="gender">Apa jenis kelamin anda?<sup className="text-red-600">*</sup></label>
            <div>
              <div className="flex gap-2">
                <input type="radio" name="gender" required />
                <label forName="gender">Laki-laki</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="gender" required />
                <label forName="gender">Perempuan</label>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label forName="smoker">Apakah anda perokok?<sup className="text-red-600">*</sup></label>
            <div>
              <div className="flex gap-2">
                <input type="radio" name="smoker" required />
                <label forName="smoker">Ya</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="smoker" required />
                <label forName="gender">Tidak</label>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label forName="cigar">Jika anda perokok, rokok apa yang pernah anda coba?</label>
            <div>
              <div className="flex gap-2">
                <input type="checkbox" name="cigar" />
                <label forName="cigar">Gudang Garam</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="cigar" />
                <label forName="cigarr">Lucky Strike</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="cigar" />
                <label forName="cigar">Marlboro</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="cigar" />
                <label forName="cigar">Esse</label>
              </div>
            </div>
          </div>
          <div className="flex">
            <button type="submit" className="bg-violet-700 px-4 py-2 rounded-md text-white">Submit</button>
            <button type="reset" className="ml-auto">Clear form</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App