import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import "./App.scss";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const samplePost = {
    author: {
      name: "Bartosz Szydlowski",
      avatar: "https://picsum.photos/40/40",
      time: "2 hours ago",
    },
    content:
      "Programming is like building with LEGO blocks, but in code. Every day brings new puzzles, bugs, and aha moments.",
    image: "https://picsum.photos/1920/1080",
    likes: 12,
    comments: 3,
  };

  return (
    <div className="app">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
      />
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} />
      <main className="app__content">
        <h2>Facebook Clone</h2>
        <Post
          author={samplePost.author}
          content={samplePost.content}
          image={samplePost.image}
          likes={samplePost.likes}
          comments={samplePost.comments}
        />

        <Post
          author={{
            name: "Wanda Krych",
            avatar: "https://picsum.photos/40/40",
            time: "5 hours ago",
          }}
          content="Who else loves programming?"
          likes={8}
          comments={1}
        />
      </main>
    </div>
  );
}

export default App;
