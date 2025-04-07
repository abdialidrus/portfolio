'use server';

import { createClient } from "../utils/supabase/server";

export async function getProjects() {
    const supabase = await createClient();

    const { data, error } = await supabase.rpc('get_projects');

    if (error) {
        console.log('Failed to fetch projects: ', error);
        return { success: false, error: 'Failed to fetch projects' };
    }

    console.log('Projects fetched successfully: ', data);
    return { success: true, data };
}