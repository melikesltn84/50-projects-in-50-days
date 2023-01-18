

console.log(1);

const login = (username, parola, callback) => {
  setTimeout(() => {
    callback({
      username: username,
      email: "melikesultanyaprak84@gmail.com",
      parola,
    });
  }, 1000);
};

const getPostByUserName = (username, callback) => {
  setTimeout(() => {
    console.log(username);
    callback(["post1", "post2", "post3", username]);
  }, 1000);
};

const getPostDetails = (posts, callback) => {
  setTimeout(() => {
    console.log(posts);
    callback("post details");
  }, 2000);
};

login("melike", "12345", (user) => {
  console.log(user.username);
  console.log(user.email);
  console.log(user.parola);

  getPostByUserName("sultan", (post) => {
    console.log(post[0]);

    getPostDetails("Bugün çok mutluyum", (details) => {
      console.log(details);
    });
  });
});

console.log(2);
