const comment = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments?_limit=10'
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayCoomment(data))
}

const displayCoomment = (comments) => {
    const getCommentSEction = document.getElementById('comment')
    getCommentSEction.innerHTML = ''
    comments.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow duration-300">
                <div class="card-body">
                    <div class="text-lg font-bold text-base-content">
                        ${comment.name}
                    </div>
                    <div class="text-sm text-primary">
                        ${comment.email}
                    </div>
                    <div class="divider my-2"></div>
                    <div class="text-sm leading-relaxed whitespace-pre-line text-base-content/80">
                        ${comment.body}
                    </div>
                </div>
            </div>
        `
        getCommentSEction.append(div)
    });
}



const users = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then((res) => res.json())
        .then((data) => showUsers(data))
}

const showUsers = (users) => {
    const getUsersSEction = document.getElementById('users')
    getUsersSEction.innerHTML = ''
    users.forEach(user => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full max-w-3xl bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow duration-300">
                <div class="card-body space-y-6">

                    <div>
                        <h2 class="card-title text-2xl">${user.name}</h2>
                        <p class="text-sm text-base-content/70">${user.username}</p>
                        <p class="text-sm text-primary">${user.email}</p>
                    </div>

                    <div class="divider my-0"></div>

                    <div>
                        <h3 class="font-semibold text-lg mb-2">Address</h3>
                        <div class="text-sm space-y-1">
                            <p>${user.address.street}</p>
                            <p>${user.address.suite}</p>
                            <p class="text-base-content/60">
                                Geo: ${user.address.geo.lat} | Lng ${user.address.geo.lng}
                            </p>
                        </div>
                    </div>

                    <div class="divider my-0"></div>

                    <div>
                        <h3 class="font-semibold text-lg mb-2">Contact</h3>
                        <div class="text-sm space-y-1">
                            <p>📞 ${user.phone}</p>
                            <p>🌐 ${user.website}</p>
                        </div>
                    </div>

                    <div class="divider my-0"></div>

                    <div>
                        <h3 class="font-semibold text-lg mb-2">Company</h3>
                        <div class="bg-base-200 p-4 rounded-lg text-sm space-y-1">
                            <p class="font-semibold">${user.company.name}</p>
                            <p class="italic text-base-content/70">
                                "${user.company.catchPhrase}"
                            </p>
                            <p class="text-base-content/60">
                                ${user.company.bs}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        `
        getUsersSEction.append(div)
    });
}