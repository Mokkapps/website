import { useEffect, useState } from 'react';

import { isDevelopmentEnv } from 'utils';

// State that reflects if the current user has already selected a reaction for a specific blog post
const initialReactionState = {
  clapped: false,
  hasRead: true, // if reader is on the page, set their read status to true
};

export default function useArticleReactions(slug) {
  // Flags to indicate if the current user has performed any reactions
  const [hasClapped, setHasClapped] = useState(false);
  const [reactions, setReactions] = useState();
  const [hydrated, setHydrated] = useState(false);

  const apiUrl = isDevelopmentEnv()
    ? `${process.env.GATSBY_API_URL}reactions/test`
    : `${process.env.GATSBY_API_URL}reactions/${slug}`;

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Once the page is hydrated, we have access to localStorage.
  // Also call this effect when localStorage is changed to properly update reaction flags
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { clapped } = getReactionsFromLocalStorage();

      // Set values after grabbing data from localStorage
      setHasClapped(clapped);
    }
  }, [hydrated, setReactionsToLocalStorage]);

  useEffect(() => {
    fetch(apiUrl).then(response => {
      response.json().then(json => setReactions(json));
    });
  }, []);

  async function handleIncrementClap() {
    updateReactions('clapped');

    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        reaction: 'clap_count',
        type: 'increment',
      }),
    });

    const response = await fetch(apiUrl);
    const json = await response.json();
    setReactions(json);
  }

  async function handleDecrementClap() {
    updateReactions('clapped');

    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        reaction: 'clap_count',
        type: 'decrement',
      }),
    });

    const response = await fetch(apiUrl);
    const json = await response.json();
    setReactions(json);
  }

  function updateReactions(reaction) {
    const currentReactions = getReactionsFromLocalStorage();
    let updatedReactionState = { ...currentReactions };
    const prevValue = updatedReactionState[reaction];
    updatedReactionState[reaction] = !prevValue;
    setReactionsToLocalStorage(updatedReactionState);
  }

  function getReactionsFromLocalStorage() {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem(slug)) || initialReactionState;
    }
    return null;
  }

  function setReactionsToLocalStorage(reactions) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(slug, JSON.stringify(reactions));
    }
  }

  return {
    hasClapped,
    reactions,
    handleIncrementClap,
    handleDecrementClap,
  };
}
