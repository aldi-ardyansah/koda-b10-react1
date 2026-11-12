import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.number().typeError("Age must be a number").required("Age is required").positive("Age must be positive").integer("Age must be an integer"),
  gender: yup.string().required("Gender is required"),
  smoker: yup.string().required("Please select your smoking status"),
  cigar: yup.array().of(yup.string()).default([]),
}).required();

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      cigar: [],
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-purple-50 p-5">
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 lg:w-1/2 w-full">
          <div className="bg-white p-10 border border-gray-200 rounded-lg border-t-8 border-t-violet-700 flex flex-col">
            <span className="text-2xl pb-4 font-semibold">Form Survey Perokok dan Non-perokok</span>
            <hr className="border-gray-400"/>
            <span className="py-4">guest@gmail.com <a href="#" className="text-blue-700">Switch account</a></span>
            <hr className="border-gray-400"/>
            <span className="pt-4 text-red-600">* Indicates required question</span>
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label htmlFor="name">Siapa nama anda?<sup className="text-red-600">*</sup></label>
            <input {...register("name")} id="name" className="p-2 border-b border-gray-400 focus:outline-0 focus:border-b-2 focus:border-violet-700" placeholder="Input your name" type="text" />
            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label htmlFor="age">Berapa usia anda?<sup className="text-red-600">*</sup></label>
            <input {...register("age")} id="age" className="p-2 border-b border-gray-400 focus:outline-0 focus:border-b-2 focus:border-violet-700" placeholder="Input your age" type="number" />
            {errors.age && <span className="text-red-600 text-sm">{errors.age.message}</span>}
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label htmlFor="gender">Apa jenis kelamin anda?<sup className="text-red-600">*</sup></label>
            <div>
              <div className="flex gap-2">
                <input {...register("gender")} type="radio" id="male" value="Laki-laki" />
                <label htmlFor="male">Laki-laki</label>
              </div>
              <div className="flex gap-2">
                <input {...register("gender")} type="radio" id="female" value="Perempuan" />
                <label htmlFor="female">Perempuan</label>
              </div>
            </div>
            {errors.gender && <span className="text-red-600 text-sm">{errors.gender.message}</span>}
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label htmlFor="smoker">Apakah anda perokok?<sup className="text-red-600">*</sup></label>
            <div>
              <div className="flex gap-2">
                <input {...register("smoker")} type="radio" id="smoker-yes" value="Ya" />
                <label htmlFor="smoker-yes">Ya</label>
              </div>
              <div className="flex gap-2">
                <input {...register("smoker")} type="radio" id="smoker-no" value="Tidak" />
                <label htmlFor="smoker-no">Tidak</label>
              </div>
            </div>
            {errors.smoker && <span className="text-red-600 text-sm">{errors.smoker.message}</span>}
          </div>
          <div className="bg-white p-10 border border-gray-200 rounded-lg flex flex-col gap-4">
            <label htmlFor="cigar">Jika anda perokok, rokok apa yang pernah anda coba?</label>
            <div>
              <div className="flex gap-2">
                <input {...register("cigar")} type="checkbox" id="gudang-garam" value="Gudang Garam" />
                <label htmlFor="gudang-garam">Gudang Garam</label>
              </div>
              <div className="flex gap-2">
                <input {...register("cigar")} type="checkbox" id="lucky-strike" value="Lucky Strike" />
                <label htmlFor="lucky-strike">Lucky Strike</label>
              </div>
              <div className="flex gap-2">
                <input {...register("cigar")} type="checkbox" id="marlboro" value="Marlboro" />
                <label htmlFor="marlboro">Marlboro</label>
              </div>
              <div className="flex gap-2">
                <input {...register("cigar")} type="checkbox" id="esse" value="Esse" />
                <label htmlFor="esse">Esse</label>
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

export default App;
