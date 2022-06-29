import { Types } from 'mongoose';

export const objectIdWithTimestamp = (
  timestampString: string,
): Types.ObjectId => {
  /* Convert string date to Date object (otherwise assume timestamp is a date) */
  //   if (typeof timestamp == 'string') {
  const timestamp = new Date(timestampString);
  //   }

  /* Convert date object to hex seconds since Unix epoch */
  const hexSeconds = Math.floor(timestamp.getTime() / 1000).toString(16);

  /* Create an ObjectId with that hex timestamp */
  const constructedObjectId = new Types.ObjectId(
    hexSeconds + '0000000000000000',
  );

  return constructedObjectId;
};
