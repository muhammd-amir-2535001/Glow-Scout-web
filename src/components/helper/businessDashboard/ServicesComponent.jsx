import React, { useEffect, useState } from "react";
import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import ServiceForm from "@/components/reuseableComponenet/ServiceForm";
import axiosInstance from "@/axiosInstance";

const ServicesComponent = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [allTreatment, setAllTreatment] = useState([]);

  useEffect(() => {
    getTreatments();
  }, []);

  const getTreatments = async () => {
    try {
      const response = await axiosInstance.get("/treatment", {
        withCredentials: true,
      });
      setAllTreatment(response.data.data.data);
    } catch (error) {
      console.error("Error fetching treatments: ", error);
    }
  };

  const handleAddClick = () => {
    setSelectedTreatment(null);
    setCurrentView("add");
  };

  const handleEditClick = (treatment) => {
    setSelectedTreatment(treatment);
    setCurrentView("edit");
  };

  return (
    <div className="container my-5">
      {currentView === "list" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
            {allTreatment.map((item, index) => (
              <button key={index} onClick={() => handleEditClick(item)}>
                <TreatmentCard {...item} imageHeightWeb={"[100px]"} />
              </button>
            ))}
          </div>
          <div className="flex justify-end items-end sticky bottom-3 left-3">
            <button
              onClick={handleAddClick}
              className="py-2 px-4 text-xl bg-darkMahron text-white rounded-full shadow-md transform transition-transform hover:scale-105"
            >
              +
            </button>
          </div>
        </>
      )}

      {currentView === "add" && <ServiceForm isEdit={false} />}

      {currentView === "edit" && selectedTreatment && (
        <ServiceForm isEdit={true} initialData={selectedTreatment} />
      )}
    </div>
  );
};

export default ServicesComponent;
