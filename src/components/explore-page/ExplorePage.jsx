import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useData } from "../../context/DataContext/DataContext";
import CategoriesBox from "../categories-box/CategoriesBox";
import Heading from "../heading/Heading";
import SideContent from "../side-content/SideContent";
import VideoCard from "../video-card/VideoCard";

import "./ExplorePage.css";

const ExplorePage = ({ item }) => {
  const { filtered } = useData();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="explore-section">
      <div className="side-context-box">
        <SideContent />
        <div className="main-content">
          <Heading heading={{ title: "All Videos" }} />
          <CategoriesBox />
          <div className="flex-center">
            {filtered.map((video) => {
              return (
                <VideoCard
                  key={video._id}
                  item={{
                    _id: video._id,
                    id: video._id,
                    videoName: video.title,
                    description: video.description,
                    creator: video.creator,
                    link: video.link,
                    category: video.category,
                    imagePath: video.imagePath,
                    views: video.views,
                    since: video.since,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
