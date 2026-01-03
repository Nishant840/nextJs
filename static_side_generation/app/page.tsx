import revalidate from "./lib/actions/action1";

export default async function Home() {
    const res = await fetch("https://sum-server.100xdevs.com/todos", {
      next:{
        revalidate: 10
      }
    });
    const data = await res.json();
    revalidate();
    return (
      <div>
        {data.title}
        <br />
        {data.description}
      </div>
    );
}
