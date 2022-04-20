import { useState } from 'react';
import HomeStyles from './home.module.css';

export default function Home() {
  const [packageJson, setPackageJson] = useState("");

  const handleTextareaChange = (event) => {
    setPackageJson({value: event.target.value});
  };

  const handleViewClick = (event) => {
    // TODO: run makeBom then viewBom
    console.log(packageJson);
  };

  return (
    <main>
      <h2>Create a software bill of materials</h2>
      <div className={HomeStyles.copyPasteForm}>
        <p>
          Paste in your package-lock.json file.
        </p>
        <textarea defaultValue={packageJson} onChange={handleTextareaChange}>
        </textarea>
        <button onClick={handleViewClick}>
          View Software Bill of Materials
        </button>
      </div>
    </main>
  );
}