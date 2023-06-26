import css from './statistics.module.css'

export function Statistics ({title, stats}) {
return(

<section className={css.statistics}>
<h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
    <li className={css.item}>
      <span className={css.label}>{stats[0].label}&nbsp;</span>
      <span className={css.percentage}>32%</span>
    </li>
    <li class={css.item}>
      <span className={css.label}>{stats[1].label}&nbsp;</span>
      <span className={css.percentage}>4%</span>
    </li>
    <li class={css.item}>
      <span className={css.label}>{stats[2].label}&nbsp;</span>
      <span className={css.percentage}>17%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{stats[3].label}&nbsp;</span>
      <span className={css.percentage}>47%</span>
    </li>
  </ul>
</section>

);

};