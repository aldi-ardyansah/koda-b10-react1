import { useState } from "react";
import { useNavigate } from "react-router";

function Table() {
    const navigate = useNavigate();
    const [surveyData, setSurveyData] = useState(() => {
        return JSON.parse(localStorage.getItem("surveyData")) || [];
    });

    function handleDelete(id) {
        const updatedData = surveyData.filter((item) => item.id !== id);

        setSurveyData(updatedData);
        localStorage.setItem("surveyData", JSON.stringify(updatedData));
    }

    return (
        <div className="min-h-screen bg-purple-50 p-5">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg border border-gray-200">
                <h1 className="text-2xl font-semibold mb-6">Survey Results</h1>
                <button onClick={() => navigate("/")} className="bg-violet-700 text-white px-4 py-2 rounded-md mb-6">
                    Back to Survey
                </button>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-violet-100">
                                <th className="border p-3">No</th>
                                <th className="border p-3">Name</th>
                                <th className="border p-3">Age</th>
                                <th className="border p-3">Gender</th>
                                <th className="border p-3">Smoker</th>
                                <th className="border p-3">Cigar</th>
                                <th className="border p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {surveyData.length > 0 ? (
                                surveyData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border p-3 text-center">{index + 1}</td>
                                        <td className="border p-3">{item.name}</td>
                                        <td className="border p-3">{item.age}</td>
                                        <td className="border p-3">{item.gender}</td>
                                        <td className="border p-3">{item.smoker}</td>
                                        <td className="border p-3">{item.cigar.length > 0 ? item.cigar.join(", ") : "-"}</td>
                                        <td className="border p-3 text-center">
                                            <button onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-3 py-1 rounded-md">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="border p-5 text-center text-gray-500">
                                        Belum ada data survey.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;