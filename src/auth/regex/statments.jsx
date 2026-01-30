
const AuthList = [
    {'emaiChick': /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/},
    {'textChick': /^[a-zA-Z ]{1,100}$/ },
    {'messageChick': /^[a-zA-Z0-9 .,!?'"()\-\n]{1,100}$/ }
]

export default AuthList