import { Meteor } from 'meteor/meteor';
import { MRBP } from '../mrbp/MRBP';

export const removeAllEntities = () => {
  if (Meteor.isTest || Meteor.isAppTest) {
    MRBP.collections.forEach(collection => {
      collection._collection.remove({});
    });
  } else {
    throw new Meteor.Error('removeAllEntities not called in testing mode.');
  }
  return true;
};
