export default function About() {
  return (
    <main className="page">
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-red-500">
        <div>
          <div className="title">About Byul.</div>
          <div>
            Hello, I am a web developer based in Vancouver, BC
            <button className="border rounded px-2">Download Resume</button>
          </div>
        </div>
        <div>Image grayscale for both light/dark</div>
      </section>

      <section>
        <div className="title">Skills</div>
        <div>
          use graph charts :
          https://velog.io/@eunjin/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B7%B8%EB%9E%98%ED%94%84%EC%B0%A8%ED%8A%B8-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AA%A8%EC%9D%8C
        </div>
      </section>

      <section>
        <div className="title">What I've learned</div>
        <div>~~~</div>
      </section>
    </main>
  );
}
