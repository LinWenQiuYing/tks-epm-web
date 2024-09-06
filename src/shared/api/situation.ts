import { get } from "./index";

const baseUrl = "/emp/equipment";

// 查看装备分类树
export async function getEpmTree(parentId: number) {
  const res = await get(`${baseUrl}/getEpCateTree/${parentId}`);
  return res.data;
}
