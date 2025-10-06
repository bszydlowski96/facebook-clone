import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import "./App.scss";

function App() {
  const samplePost = {
    author: {
      name: "Bartosz Szydłowski",
      avatar: "https://picsum.photos/40/40",
      time: "2 godziny temu",
    },
    content:
      "Programowanie to dla mnie trochę jak układanie klocków LEGO — tylko że w kodzie. Każdy dzień to nowe zagadki, błędy i momenty „aha!”. Lubię to uczucie, kiedy coś w końcu działa po godzinach kombinowania. Wtedy nawet zwykły potrafi dać satysfakcję większą niż kawa z rana ☕💻",
    image: "https://picsum.photos/1920/1080",
    likes: 12,
    comments: 3,
  };

  return (
    <div className="app">
      <Header />
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
            time: "5 godzin temu",
          }}
          content="Kto też kocha programowanie?"
          likes={8}
          comments={1}
        />
      </main>
    </div>
  );
}

export default App;
