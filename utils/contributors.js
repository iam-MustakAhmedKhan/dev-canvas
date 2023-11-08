import axios from "axios";


export const contributor = async (filename) => {
    const { data } = await axios.get(`https://api.github.com/repos/iam-MustakAhmedKhan/dev-canvas/commits?path=data/${filename}.json`, {
        headers: {
            'Authorization':`${process.env.GITHUB_TOKEN}`
        }
    });
    const charMap = {};


    data.forEach(oneData => {
        if (oneData.author) {
            const { login } = oneData.author;
            if (!charMap[login]) {
                charMap[login] = {
                    count: 1,
                    login: oneData.author.login,
                    name: oneData.commit.author.name,
                    avatar_url: oneData.author.avatar_url,
                    html_url: oneData.author.html_url,
                };
            } else {
                charMap[login].count++;
            }
        }
    });

    
    return charMap;
};