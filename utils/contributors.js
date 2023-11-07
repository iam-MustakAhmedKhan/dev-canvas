

export const contributor = async (filename) => {


    const rawdata = await fetch(`https://api.github.com/repos/iam-MustakAhmedKhan/dev-canvas/commits?path=data/${filename}.json`)

    const data= await rawdata.json()


    const charMap = [];

    data.forEach(oneData => {
        if (oneData.author) {
            charMap.push({
                login: oneData.author.login,
                name: oneData.commit.author.name,
                avatar_url: oneData.author.avatar_url,
                html_url: oneData.author.html_url,
            })
        }
    });
    return charMap;
};
