import type { Struct, Schema } from '@strapi/strapi';

export interface QuestionQuestion extends Struct.ComponentSchema {
  collectionName: 'components_question_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.String;
    description: Schema.Attribute.String;
    quizzType: Schema.Attribute.String;
    showToggle: Schema.Attribute.Boolean;
    key: Schema.Attribute.String;
    answers: Schema.Attribute.Component<'answer.answer', true>;
  };
}

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    cintentId: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    type: Schema.Attribute.String;
    adapted: Schema.Attribute.Text;
    translated: Schema.Attribute.Text;
  };
}

export interface PracticalProcedureChapter extends Struct.ComponentSchema {
  collectionName: 'components_practical_procedure_chapters';
  info: {
    displayName: 'chapter';
  };
  attributes: {
    key: Schema.Attribute.String;
    langId: Schema.Attribute.String;
    next_id: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'practical-procedure.cards', true>;
  };
}

export interface PracticalProcedureCards extends Struct.ComponentSchema {
  collectionName: 'components_practical_procedure_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    id1: Schema.Attribute.String;
    content: Schema.Attribute.JSON;
    type: Schema.Attribute.String;
    adapted: Schema.Attribute.JSON;
    translated: Schema.Attribute.JSON;
  };
}

export interface ChaptterChaptter extends Struct.ComponentSchema {
  collectionName: 'components_chaptter_chaptters';
  info: {
    displayName: 'Chaptter';
  };
  attributes: {
    key: Schema.Attribute.String;
    langId: Schema.Attribute.String;
    content: Schema.Attribute.Component<'content.content', true>;
  };
}

export interface ChapterChapter extends Struct.ComponentSchema {
  collectionName: 'components_chapter_chapters';
  info: {
    displayName: 'chapter';
    description: '';
  };
  attributes: {};
}

export interface ChapterChapt extends Struct.ComponentSchema {
  collectionName: 'components_chapter_chapts';
  info: {
    displayName: 'chapt';
  };
  attributes: {};
}

export interface ChapterrChapterr extends Struct.ComponentSchema {
  collectionName: 'components_chapterr_chapterrs';
  info: {
    displayName: 'chapterr';
  };
  attributes: {
    key: Schema.Attribute.String;
    langId: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'cardcontent1.card1', true>;
  };
}

export interface Cardcontent1Card1 extends Struct.ComponentSchema {
  collectionName: 'components_cardcontent1_card1s';
  info: {
    displayName: 'card1';
  };
  attributes: {};
}

export interface CardContentCard extends Struct.ComponentSchema {
  collectionName: 'components_card_content_cards';
  info: {
    displayName: 'card';
  };
  attributes: {};
}

export interface CardContentCardContent extends Struct.ComponentSchema {
  collectionName: 'components_card_content_card_contents';
  info: {
    displayName: 'cardContent';
    description: '';
  };
  attributes: {};
}

export interface AnswerAnswer extends Struct.ComponentSchema {
  collectionName: 'components_answer_answers';
  info: {
    displayName: 'Answer';
    description: '';
  };
  attributes: {
    correct: Schema.Attribute.Boolean;
    value: Schema.Attribute.String;
  };
}

export interface Actioncard1Chapter1 extends Struct.ComponentSchema {
  collectionName: 'components_actioncard1_chapter1s';
  info: {
    displayName: 'chapter1';
  };
  attributes: {
    key: Schema.Attribute.String;
    langid1: Schema.Attribute.String;
    card1: Schema.Attribute.Component<'cardcontent1.card1', true>;
  };
}

export interface Actioncard1CardContent1 extends Struct.ComponentSchema {
  collectionName: 'components_actioncard1_card_content1s';
  info: {
    displayName: 'cardContent1';
  };
  attributes: {
    actioncard1id: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    type: Schema.Attribute.String;
    adapted: Schema.Attribute.Text;
    translated: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'question.question': QuestionQuestion;
      'content.content': ContentContent;
      'practical-procedure.chapter': PracticalProcedureChapter;
      'practical-procedure.cards': PracticalProcedureCards;
      'chaptter.chaptter': ChaptterChaptter;
      'chapter.chapter': ChapterChapter;
      'chapter.chapt': ChapterChapt;
      'chapterr.chapterr': ChapterrChapterr;
      'cardcontent1.card1': Cardcontent1Card1;
      'card-content.card': CardContentCard;
      'card-content.card-content': CardContentCardContent;
      'answer.answer': AnswerAnswer;
      'actioncard1.chapter1': Actioncard1Chapter1;
      'actioncard1.card-content1': Actioncard1CardContent1;
    }
  }
}
