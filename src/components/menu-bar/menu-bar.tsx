import styles from "./menu-bar.module.scss"

function MenuBar(){
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <code>{"<eb/>"}</code>
      </div>
    </div>
  );
}

export default MenuBar;
