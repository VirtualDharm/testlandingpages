import React, { useState } from "react";
import {
  Calculator,
  Zap,
  TrendingUp,
  Home,
  Building,
  Factory,
} from "lucide-react";

const SolarEMSaving = ({ closeModal }) => {
  const [inputs, setInputs] = useState({
    roofArea: "",
    monthlyConsumption: "",
    category: "residential",
  });

  const [errors, setErrors] = useState({
    roofArea: "",
    monthlyConsumption: "",
  });

  const [results, setResults] = useState(null);

  const validateInputs = () => {
    const newErrors = {
      roofArea: "",
      monthlyConsumption: "",
    };
    let isValid = true;

    // Roof Area validation
    if (!inputs.roofArea) {
      newErrors.roofArea = "Roof area is required";
      isValid = false;
    } else if (parseFloat(inputs.roofArea) <= 0) {
      newErrors.roofArea = "Roof area must be a positive number";
      isValid = false;
    }

    // Monthly Consumption validation
    if (!inputs.monthlyConsumption) {
      newErrors.monthlyConsumption = "Monthly consumption is required";
      isValid = false;
    } else if (parseFloat(inputs.monthlyConsumption) <= 0) {
      newErrors.monthlyConsumption =
        "Monthly consumption must be a positive number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const calculateSavings = () => {
    if (!validateInputs()) {
      return;
    }

    const { roofArea, monthlyConsumption, category } = inputs;

    const baseUnitPrice = 8.5;

    let tariffMultiplier;
    switch (category) {
      case "residential":
        tariffMultiplier = 1.75;
        break;
      case "commercial":
        tariffMultiplier = 1.3;
        break;
      case "industrial":
      default:
        tariffMultiplier = 1.0;
    }

    const adjustedTariff = baseUnitPrice * tariffMultiplier;

    const solarCapacityPerSqFt = 0.011;
    const totalSolarCapacity = parseFloat(roofArea) * solarCapacityPerSqFt;

    const dailySolarGeneration = totalSolarCapacity * 4.2;
    const monthlySolarGeneration = dailySolarGeneration * 30;
    const annualSolarGeneration = dailySolarGeneration * 365;

    const monthlyConsumptionNum = parseFloat(monthlyConsumption);
    const annualConsumption = monthlyConsumptionNum * 12;

    let annualEnergyFromGrid, annualEnergySentToGrid;

    if (annualSolarGeneration >= annualConsumption) {
      annualEnergyFromGrid = 0;
      annualEnergySentToGrid = annualSolarGeneration - annualConsumption;
    } else {
      annualEnergyFromGrid = annualConsumption - annualSolarGeneration;
      annualEnergySentToGrid = 0;
    }

    const netGridEnergy = annualEnergySentToGrid - annualEnergyFromGrid;

    const monthlyGridCost = monthlyConsumptionNum * adjustedTariff;
    const monthlySolarSavings = (annualSolarGeneration / 12) * adjustedTariff;
    const monthlyGridCost_actual = (annualEnergyFromGrid / 12) * adjustedTariff;
    const monthlyGridRevenue =
      (annualEnergySentToGrid / 12) * (adjustedTariff * 0.8);
    const totalMonthlySavings =
      monthlyGridCost - monthlyGridCost_actual + monthlyGridRevenue;

    const savingsPercentage = Math.max(
      0,
      (totalMonthlySavings / monthlyGridCost) * 100
    );

    const annualSavings = totalMonthlySavings * 12;
    const twentyFiveYearSavings = annualSavings * 25 * 0.85;

    setResults({
      adjustedTariff: adjustedTariff.toFixed(2),
      annualConsumption: annualConsumption.toFixed(0),
      annualSolarGeneration: annualSolarGeneration.toFixed(0),
      energyFromGrid: annualEnergyFromGrid.toFixed(0),
      energySentToGrid: annualEnergySentToGrid.toFixed(0),
      netGridEnergy: netGridEnergy.toFixed(0),
      monthlySavings: totalMonthlySavings.toFixed(2),
      savingsPercentage: savingsPercentage.toFixed(1),
      twentyFiveYearSavings: twentyFiveYearSavings.toFixed(0),
    });
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "residential":
        return <Home className="w-4 h-4" />;
      case "commercial":
        return <Building className="w-4 h-4" />;
      case "industrial":
        return <Factory className="w-4 h-4" />;
      default:
        return <Home className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-screen-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <h2 className="text-lg font-sans tracking-wide">
              Solar Energy Savings Calculator
            </h2>
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-2">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">
                  Roof Area (sq ft)*
                </label>
                <input
                  type="number"
                  value={inputs.roofArea}
                  onChange={(e) =>
                    handleInputChange("roofArea", e.target.value)
                  }
                  placeholder="e.g., 1130"
                  required
                  className={`w-full px-3 py-2 border ${
                    errors.roofArea ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.roofArea && (
                  <p className="text-red-500 text-xs mt-1">{errors.roofArea}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">
                  Monthly Consumption (kWh)*
                </label>
                <input
                  type="number"
                  value={inputs.monthlyConsumption}
                  onChange={(e) =>
                    handleInputChange("monthlyConsumption", e.target.value)
                  }
                  placeholder="e.g., 1408"
                  required
                  className={`w-full px-3 py-2 border ${
                    errors.monthlyConsumption
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.monthlyConsumption && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.monthlyConsumption}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-sans">
                Category
              </label>
              <select
                value={inputs.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>

            <button
              onClick={calculateSavings}
              className="w-full font-sans bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-md font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Calculate Savings
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-gray-50 rounded-lg p-3 font-sans">
            {results ? (
              <>
                <h3 className="text-lg font-semibold font-sans text-gray-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Your Solar Savings Summary
                </h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-2 rounded-md shadow-sm">
                      <div className="text-sm text-gray-500 font-sans">
                        Adjusted Tariff
                      </div>
                      <div className="text-lg font-semibold font-sans text-blue-600">
                        ₹{results.adjustedTariff}/kWh
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-md shadow-sm">
                      <div className="text-sm text-gray-500 font-sans">
                        Annual Consumption
                      </div>
                      <div className="text-lg font-semibold font-sans text-green-600">
                        {results.annualConsumption} kWh
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-2 rounded-md shadow-sm">
                      <div className="text-sm text-gray-500 font-sans">
                        Annual Solar Generation
                      </div>
                      <div className="text-lg font-semibold font-sans text-yellow-600">
                        {results.annualSolarGeneration} kWh
                      </div>
                    </div>

                    <div
                      className={`bg-white p-2 rounded-md shadow-sm ${
                        parseFloat(results.netGridEnergy) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      <div className="text-sm text-gray-500 font-sans">
                        Net Grid Energy
                      </div>
                      <div className="text-lg font-semibold font-sans">
                        {parseFloat(results.netGridEnergy) >= 0 ? "+" : ""}
                        {results.netGridEnergy} kWh
                      </div>
                      <div className="text-xs">
                        {parseFloat(results.netGridEnergy) >= 0
                          ? "Excess sent to grid"
                          : "Deficit from grid"}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg border border-green-200">
                      <div className="text-sm text-gray-600">
                        Monthly Savings
                      </div>
                      <div className="text-2xl font-sans font-bold text-green-700">
                        ₹{results.monthlySavings}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border border-blue-200">
                      <div className="text-sm text-gray-600">
                        Savings Percentage
                      </div>
                      <div className="text-2xl font-bold font-sans text-blue-700">
                        {results.savingsPercentage}%
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">25-Year Savings</div>
                    <div className="text-xl font-semibold font-sans text-indigo-600">
                      ₹{results.twentyFiveYearSavings}
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-gray-100 rounded-md text-xs font-sans text-gray-600 italic">
                    *Note: This is an indicative calculation based on standard
                    assumptions. For accurate assessment, please contact our
                    solar advisor.
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-center font-sans">
                  Enter your details and click "Calculate Savings" to see your
                  potential solar energy savings.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarEMSaving;