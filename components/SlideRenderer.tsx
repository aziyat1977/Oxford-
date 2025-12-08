
import React from 'react';
import { SlideConfig, SlideType } from '../types';
import { IntroSlide } from './slides/IntroSlide';
import { StatsChartSlide } from './slides/StatsChartSlide';
import { ReadingSlide } from './slides/ReadingSlide';
import { GrammarTimelineSlide } from './slides/GrammarTimelineSlide';
import { FriendCirclesSlide } from './slides/FriendCirclesSlide';
import { VocabGameSlide } from './slides/VocabGameSlide';
import { GrammarTetrisSlide } from './slides/GrammarTetrisSlide';
import { CreativeTaskSlide } from './slides/CreativeTaskSlide';
import { QuizSlide } from './slides/QuizSlide';
import { MatchingSlide } from './slides/MatchingSlide';
import { ReflectiveSlide } from './slides/ReflectiveSlide';

interface SlideRendererProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, isActive }) => {
  switch (slide.type) {
    case SlideType.INTRO:
      return <IntroSlide slide={slide} isActive={isActive} />;
    case SlideType.STATS_CHART:
      return <StatsChartSlide slide={slide} isActive={isActive} />;
    case SlideType.INTERACTIVE_READING:
      return <ReadingSlide slide={slide} isActive={isActive} />;
    case SlideType.GRAMMAR_TIMELINE:
      return <GrammarTimelineSlide slide={slide} isActive={isActive} />;
    case SlideType.FRIEND_CIRCLES:
      return <FriendCirclesSlide slide={slide} isActive={isActive} />;
    case SlideType.TRANSITION:
      return <IntroSlide slide={slide} isActive={isActive} isTransition={true} />;
    case SlideType.VOCAB_GAME:
      return <VocabGameSlide slide={slide} isActive={isActive} />;
    case SlideType.GRAMMAR_TETRIS:
      return <GrammarTetrisSlide slide={slide} isActive={isActive} />;
    case SlideType.CREATIVE_TASK:
      return <CreativeTaskSlide slide={slide} isActive={isActive} />;
    case SlideType.QUIZ:
      return <QuizSlide slide={slide} isActive={isActive} />;
    case SlideType.MATCHING:
      return <MatchingSlide slide={slide} isActive={isActive} />;
    case SlideType.REFLECTION:
      return <ReflectiveSlide slide={slide} isActive={isActive} />;
    default:
      return (
        <div className="flex items-center justify-center h-full text-slate-500">
          Unknown Slide Type: {slide.type}
        </div>
      );
  }
};
