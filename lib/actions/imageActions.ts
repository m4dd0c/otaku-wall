import { instance } from "..";

export const getImageById = async ({ image_id }: { image_id: string }) => {
  const { data } = await instance.get(`/${image_id}`);
  console.log(data);
  return data;
};

export const getRandomImages = async () => {
  const { data } = await instance.get("/random", { params: { rating: "safe" } });
  return data;
};

export const getRandomImageFile = async () => {
  const { data } = await instance.get("/random/file");
  console.log(data);
  return data;
};

export const getAnImagesArtist = async ({ image_id }: { image_id: string }) => {
  const { data } = await instance.get(`/${image_id}/artist`);
  console.log(data);
  return data;
};

export const getAnImagesCharacter = async ({
  image_id,
}: {
  image_id: string;
}) => {
  const { data } = await instance.get(`/${image_id}/characters`);
  console.log(data);
  return data;
};

export const getAnImagesTag = async ({ image_id }: { image_id: string }) => {
  const { data } = await instance.get(`/${image_id}/tags`);
  console.log(data);
  return data;
};

/**
 * Search Image by tag.
 * @param {string} search - Search term. Will return all tags with this term(s) in their name or description.
 * @param {boolean} is_nsfw - Whether the tag is NSFW or not.
 * @param {number} limit - Amount of tags to return.
 * @param {number} offset - Amount of tags to skip.
 */
export const searchByTag = async ({
  search,
  is_nsfw = false,
  limit = 20,
  offset,
}: {
  search: string;
  is_nsfw?: boolean;
  limit?: number;
  offset?: number;
}) => {
  const { data } = await instance.get("/tags", {
    params: {
      search,
      is_nsfw,
      limit,
      offset,
    },
  });
  console.log(data);
  return data;
};

export const getTagById = async ({ tag_id }: { tag_id: string }) => {
  const { data } = await instance.get(`/tag/${tag_id}`);
  console.log(data);
  return data;
};

/**
 * All all images from tag
 * @param {tag_id} search - The Tag's Id.
 * @param {number} limit - Amount of images to return.
 * @param {number} offset - Amount of images to skip.
 */
export const getAnTagsImages = async ({
  tag_id,
  limit,
  offset,
}: {
  tag_id: string;
  limit?: number;
  offset?: number;
}) => {
  const { data } = await instance.get(`/tags/${tag_id}/images`, {
    params: {
      tag_id,
      limit,
      offset,
    },
  });
  console.log(data);
  return data;
};
