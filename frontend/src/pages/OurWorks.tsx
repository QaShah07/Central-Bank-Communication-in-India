import React, { useState } from "react";
import DownloadModal from "../components/DownloadModal";

type ResourceItem = {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  resourceSlug: string;
  downloadUrl: string;
};

const researchPapers: ResourceItem[] = [
  {
    category: "Working Paper",
    title: "The Impact of Monetary Policy on Inflation in India",
    description:
      "A comprehensive analysis of the relationship between monetary policy decisions and inflation rates in India, covering the period from 2010 to 2023.",
    imageUrl: "/assets/images/paper1.jpg", // replace with actual image path
    resourceSlug: "impact-monetary-policy-inflation",
    downloadUrl: "/downloads/impact_monetary_policy.pdf",
  },
  {
    category: "Discussion Paper",
    title: "Monetary Policy Transmission Mechanism in India",
    description:
      "An examination of how monetary policy changes affect the real economy in India, focusing on the role of banks, financial markets, and consumer behavior.",
    imageUrl: "/assets/images/paper2.jpg",
    resourceSlug: "monetary-policy-transmission",
    downloadUrl: "/downloads/monetary_transmission_mechanism.pdf",
  },
  {
    category: "Research Article",
    title: "The Effectiveness of Quantitative Easing in India",
    description:
      "An assessment of the impact of quantitative easing measures implemented by the Reserve Bank of India during the COVID-19 pandemic.",
    imageUrl: "/assets/images/paper3.jpg",
    resourceSlug: "effectiveness-quantitative-easing",
    downloadUrl: "/downloads/qe_effectiveness_india.pdf",
  },
];

const dataRepos: ResourceItem[] = [
  {
    category: "Dataset",
    title: "Indian Monetary Policy Indicators",
    description:
      "A comprehensive dataset of key monetary policy indicators for India, including policy rates, reserve requirements, and liquidity measures.",
    imageUrl: "/assets/images/dataset1.jpg",
    resourceSlug: "monetary-policy-indicators",
    downloadUrl: "/downloads/monetary_policy_indicators.xlsx",
  },
  {
    category: "Dataset",
    title: "Inflation Data for India",
    description:
      "A time series dataset of inflation rates in India, covering various measures such as CPI and WPI.",
    imageUrl: "/assets/images/dataset2.jpg",
    resourceSlug: "inflation-data-india",
    downloadUrl: "/downloads/inflation_data_india.csv",
  },
  {
    category: "Code Repository",
    title: "Monetary Policy Analysis Code",
    description:
      "A repository of code and scripts used for analyzing monetary policy in India, including implementations of various econometric models.",
    imageUrl: "/assets/images/code1.jpg",
    resourceSlug: "monetary-policy-analysis-code",
    downloadUrl: "https://github.com/your-repo/monetary-policy-analysis", // external URL
  },
];

const OurWorks: React.FC = () => {
  // Track modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    (ResourceItem & { resourceType: "paper" | "dataset" | "code" }) | null
  >(null);

  // Open modal with the selected item
  const openModal = (
    item: ResourceItem,
    type: "paper" | "dataset" | "code"
  ) => {
    setSelectedItem({ ...item, resourceType: type });
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Research Papers Section */}
      <h1 className="text-4xl font-bold mb-6">Research Papers</h1>

      {/* (Optional) Search Bar Stub */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search papers by title, author, or keywords"
          className="w-full px-4 py-3 bg-gray-100 placeholder-gray-500 rounded-xl focus:outline-none"
        />
      </div>

      <div className="space-y-12">
        {researchPapers.map((paper) => (
          <div
            key={paper.resourceSlug}
            className="flex flex-col md:flex-row items-center"
          >
            {/* Text Area */}
            <div className="md:w-2/3 md:pr-6">
              <p className="text-sm uppercase text-gray-500 mb-1">
                {paper.category}
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {paper.title}
              </h2>
              <p className="text-gray-600 mb-4">{paper.description}</p>
              <button
                onClick={() => openModal(paper, "paper")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                Submit & Download
              </button>
            </div>
            {/* Image Area */}
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img
                src={paper.imageUrl}
                alt={paper.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Data Repository Section */}
      <div className="mt-16 space-y-12">
        <h1 className="text-4xl font-bold mb-6">Data Repository</h1>
        {dataRepos.map((data) => (
          <div
            key={data.resourceSlug}
            className="flex flex-col md:flex-row items-center"
          >
            {/* Text Area */}
            <div className="md:w-2/3 md:pr-6">
              <p className="text-sm uppercase text-gray-500 mb-1">
                {data.category}
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {data.title}
              </h2>
              <p className="text-gray-600 mb-4">{data.description}</p>
              <button
                onClick={() =>
                  openModal(
                    data,
                    data.category === "Code Repository" ? "code" : "dataset"
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                Submit & Download
              </button>
            </div>
            {/* Image Area */}
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Download Modal */}
      {selectedItem && (
        <DownloadModal
          isOpen={isModalOpen}
          onClose={closeModal}
          resourceType={selectedItem.resourceType}
          resourceSlug={selectedItem.resourceSlug}
          resourceName={selectedItem.title}
          downloadUrl={selectedItem.downloadUrl}
        />
      )}
    </div>
  );
};

export default OurWorks;
