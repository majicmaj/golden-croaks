export async function getData() {
  const url =
    'https://ddragon.leagueoflegends.com/cdn/15.2.1/data/en_US/champion/Akali.json';
  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
