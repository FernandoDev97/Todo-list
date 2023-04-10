import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App";
import Task from "../Task";
import styles from "./tasks.module.css";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

const Tasks = ({ tasks, onDelete, onComplete }: Props) => {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTasks} de {taskQuantity}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={onDelete} onComplete={onComplete}/>
        ))}
        {tasks.length <= 0 && (
            <section className={styles.empty}>
                <TbClipboardText size={50}/>
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </section>
        )}
      </div>
    </section>
  );
};

export default Tasks;
