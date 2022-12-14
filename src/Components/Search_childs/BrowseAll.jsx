import React from "react";

const arr = [
  {
    id: 1,
    title: "Podcasts",
    bg: `#27856A
    `,
  },
  {
    id: 2,
    title: "Made For You",
    bg: `#1E3264`,
  },
  {
    id: 3,
    title: "Charts",
    bg: `#8D67AB`,
  },
  {
    id: 4,
    title: "Made For You",
    bg: `#E8115B`,
  },
  {
    id: 5,
    title: "Charts",
    bg: `#8D67AB `,
  },
  {
    id: 6,
    title: "Podcasts",
    bg: `#1E3264`,
  },
  {
    id: 7,
    title: "Made For You",
    bg: `#CA3489`,
  },
  {
    id: 8,
    title: "Charts",
    bg: `#B09DC5`,
  },
  {
    id: 9,
    title: "Chill",
    bg: `#509BF5`,
  },
  {
    id: 10,
    title: "Workout",
    bg: `blue`,
  },
  {
    id: 11,
    title: "Workout",
    bg: `#8D67AB`,
  },
  {
    id: 12,
    title: "Workout",
    bg: `blue`,
  },
];

function BrowseAll_child({ item }) {
  return (
    <div
      style={{ background: item.bg }}
      className={`relative h-[224px] rounded-xl p-[20px]`}
    >
      <p className="text-white text-2xl font-bold">{item.title}</p>
      <img
        className="absolute bottom-0 right-0"
        src="/img/Album Art1.svg"
        alt=""
      />
    </div>
  );
}

function BrowseAll() {
  const BrowseAllChild = () => {
    return arr.map((item) => <BrowseAll_child item={item} />);
  };

  return (
    <div>
      <h2 className="text-white text-3xl font-bold mb-[24px]">Browse all</h2>
      <div className="grid grid-cols-4 gap-10">
        <BrowseAllChild />
      </div>
    </div>
  );
}

export default BrowseAll;
