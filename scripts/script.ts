let programmingJokes: string[] = [
    "Why do programmers prefer dark mode? Because the light attracts bugs!",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Why do Java developers wear glasses? Because they don't C#!",
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem."
];

let API: string = `https://v2.jokeapi.dev/joke/any`;
let main: any = document.querySelector(".theJoke");
let select: HTMLElement | null = document.getElementById("select-joke");

async function getData() {
    try {
        if ((select as HTMLSelectElement).value === 'programming') {
            let randomJoke: string = programmingJokes[Math.floor(Math.random() * programmingJokes.length)];
            main.innerHTML = randomJoke;
        } else {
            let response: Response = await fetch(`https://v2.jokeapi.dev/joke/${(select as HTMLSelectElement).value}`);
            let data: object = await response.json();

            showData(data);
        }
    } catch (error) {
        alert(`Error: ${error}`);
    }
}

let showData = (jokeData: object | any): void => {
    if (jokeData.type === "single") {
        main.innerHTML = jokeData.joke;
    } else {
        main.innerHTML = `${jokeData.setup} <br> ${jokeData.delivery}`;
    }
};

(select as HTMLSelectElement).addEventListener("change", getData);
