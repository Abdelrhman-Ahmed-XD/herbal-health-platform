import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';

export default function PlantCard({ plant }) {
  const { t, isAr } = useLanguage();
  const arData = isAr ? PLANT_TRANSLATIONS.ar[plant.id] : null;
  const displayName  = arData?.name  ?? plant.name;
  const displayShort = arData?.shortDescription ?? plant.shortDescription;

  const handlePlantClick = () => {
    const views = JSON.parse(localStorage.getItem('plantViews') || '{}');
    views[plant.id] = (views[plant.id] || 0) + 1;
    localStorage.setItem('plantViews', JSON.stringify(views));
  };

  return (
    <Link to={`/plant/${plant.id}`} onClick={handlePlantClick} className="block group">
      <div className="card-botanical shadow-botanical hover:shadow-botanical-lg">
        <div className="relative h-52 overflow-hidden bg-surface-container">
          <img
            src={plant.image}
            alt={displayName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className={`absolute top-3 ${isAr ? 'right-3' : 'left-3'} flex flex-wrap gap-1.5`}>
            {plant.tags.slice(0, 2).map(tag => (
              <span key={tag} className="chip text-xs">{tag}</span>
            ))}
          </div>
          <button
            className={`absolute top-3 ${isAr ? 'left-3' : 'right-3'} w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors`}
            onClick={(e) => e.preventDefault()}
            aria-label={t('plant_save')}
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0" }}>
              bookmark
            </span>
          </button>
        </div>

        <div className="p-5">
          <div className="mb-2">
            <h3 className="font-caslon text-xl text-primary group-hover:text-secondary transition-colors">
              {displayName}
            </h3>
            <p className="font-manrope text-xs text-on-surface-variant italic mt-0.5">
              {plant.latinName}
            </p>
          </div>
          <p className="font-manrope text-sm text-on-surface-variant leading-relaxed line-clamp-3">
            {displayShort}
          </p>
          <div className={`flex items-center gap-1.5 mt-4 text-primary font-manrope text-sm font-semibold tracking-wide group-hover:gap-3 transition-all duration-200 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
            {t('plant_view_profile')}
            <span
              className="material-symbols-outlined text-base"
              style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}
            >
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
