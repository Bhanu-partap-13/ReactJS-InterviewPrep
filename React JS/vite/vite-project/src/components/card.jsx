import styles from './card.module.css';

function Card() {
    return (
        <div className={styles.div1}>
            <div className={styles.button}>
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Car Image" className="w-full h-64 object-cover rounded-md" />
                <h1 className={styles.title}> Card </h1>
            </div>
            </div>
        </div>
    )
}

export default Card;