// API KEY VISIBLE = I DON'T REALLY CARE!
const VOICE_RSS_API_KEY = "537cee61bb24474887b796bf0dd983da";

const audio: HTMLAudioElement | null = document.querySelector("#audio");
const button: HTMLButtonElement | null = document.querySelector("#button");

function createAudioSrc(txt: string): string {
    return `http://api.voicerss.org/?key=${VOICE_RSS_API_KEY}&hl=en-us&src=${txt}`;
}

async function getJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        });
        const { joke } = await response.json();

        return joke as string;
    } catch (error) {
        console.error(error);
    }
}

button?.addEventListener("click", async () => {
    const joke = await getJoke();

    if (audio && joke) {
        audio.src = createAudioSrc(joke);
        audio.play();
    }
});

export { };