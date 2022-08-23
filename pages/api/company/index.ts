import { ITeamMember } from './../../../components/features/company/team';
import dataEn from 'data/company/employees.en.json';
import dataDe from 'data/company/employees.de.json';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<ITeamMember[]>,
) {
  return res.status(200).json(dataEn);
}
