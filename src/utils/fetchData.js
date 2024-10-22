export  const fetchData = async(URL) => {
    let res = await fetch(URL);
    res = await res.json();
    return res;
  }