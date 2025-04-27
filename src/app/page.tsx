export default function Home() {
  return (
    <main className="max-w-xl mx-auto flex flex-col gap-2 p-4">
      <div>
        <button type="button" className="btn btn-primary mr-2">
          Button
        </button>
        <button type="button" className="btn btn-secondary">
          Button
        </button>
      </div>
      <div role="alert" className="alert alert-success">
        <span>Your purchase has been confirmed!</span>
      </div>
      <div role="alert" className="alert alert-warning">
        <span>Warning: Invalid email address!</span>
      </div>
      <div role="alert" className="alert alert-info">
        <span>12 unread messages. Tap to see.</span>
      </div>
      <div role="alert" className="alert alert-error">
        <span>Error! Task failed successfully.</span>
      </div>
      <h1 className="text-5xl">Heading 1</h1>
      <h2 className="text-4xl">Heading 2</h2>
      <h3 className="text-3xl">Heading 3</h3>
      <h4 className="text-2xl">Heading 4</h4>
      <p>
        Aute mollit in nisi aliqua proident. Proident dolore ad aliquip eu laboris quis laborum aute
        laborum fugiat. Laboris adipisicing aliqua adipisicing qui mollit exercitation duis ex
        labore do aliquip laborum pariatur.
      </p>
      <p>
        <b>
          Mollit<sup className="text-primary">[1]</sup> consequat dolore amet do fugiat.
        </b>{' '}
        <i>
          Culpa<sub className="text-primary">[2]</sub> officia qui occaecat velit ullamco deserunt
          consequat amet labore ipsum reprehenderit duis nisi consectetur.
        </i>{' '}
        Consequat sint ipsum elit enim Lorem aliqua culpa voluptate duis.
      </p>
    </main>
  )
}
