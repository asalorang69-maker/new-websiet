const demoUser = {
    username: "admin",
    password: "admin123"
};

let posts = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
        username === demoUser.username &&
        password === demoUser.password
    ) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("app").style.display = "block";
    } else {
        alert("Username atau password salah");
    }
}

function logout() {
    location.reload();
}

function createPost() {
    const text = document.getElementById("postText").value;

    if (!text) return;

    posts.unshift({
        author: "admin",
        content: text,
        likes: 0
    });

    document.getElementById("postText").value = "";
    renderPosts();
}

function likePost(index) {
    posts[index].likes++;
    renderPosts();
}

function renderPosts() {
    const feed = document.getElementById("feed");

    feed.innerHTML = "";

    posts.forEach((post, index) => {
        feed.innerHTML += `
            <div class="post">
                <h4>${post.author}</h4>
                <p>${post.content}</p>
                <button onclick="likePost(${index})">
                    Like (${post.likes})
                </button>
            </div>
        `;
    });
}